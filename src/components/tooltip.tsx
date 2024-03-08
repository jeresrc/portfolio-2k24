"use client";

import {
  FloatingPortal,
  type Placement,
  autoUpdate,
  flip,
  offset,
  shift,
  useDelayGroup,
  useDelayGroupContext,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import {type ReactNode, cloneElement, useContext, useId, useLayoutEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import {TooltipGroupContext} from "./tooltip-group";

interface TooltipProps {
  content: ReactNode;
  showDelay?: number;
  hideDelay?: number;
  placement?: Placement;
  children: JSX.Element;
}

export function Tooltip({content, showDelay, hideDelay, placement, children}: TooltipProps) {
  const {placement: groupPlacement, groupId} = useContext(TooltipGroupContext);
  const {delay, isInstantPhase} = useDelayGroupContext();
  const showDelayFinal = showDelay ?? (typeof delay === "number" ? delay : delay.open) ?? 500;
  const hideDelayFinal = hideDelay ?? (typeof delay === "number" ? delay : delay.close) ?? 200;
  const placementFinal = placement ?? groupPlacement;
  const [open, setOpen] = useState(false);

  // unmounted -> initial -> positioned -> unmounted
  const [state, setState] = useState<"unmounted" | "initial" | "positioned">("unmounted");

  const {
    x,
    y,
    refs,
    strategy,
    context,
    isPositioned,
    placement: computedPlacement,
  } = useFloating({
    placement: placementFinal,
    open,
    onOpenChange(open) {
      setOpen(open);
      if (open) {
        // We need additional check because onOpenChange will be triggered when we switch between tooltip elements
        if (state === "unmounted") setState("initial");
      }
    },
    middleware: [offset(8), flip(), shift({padding: 8})],
    whileElementsMounted: autoUpdate,
  });

  const {getReferenceProps, getFloatingProps} = useInteractions([
    useHover(context, {delay: showDelayFinal, restMs: hideDelayFinal}),
    useFocus(context),
    useRole(context, {role: "tooltip"}),
    useDismiss(context),
  ]);

  const tooltipId = useId();

  useDelayGroup(context, {id: tooltipId});

  useLayoutEffect(() => {
    if (isPositioned && state !== "positioned") {
      setState("positioned");
    }
  }, [isPositioned, state]);

  const translate = {
    top: {translateY: 5},
    bottom: {translateY: -5},
    left: {translateX: 5},
    right: {translateX: -5},
  }[computedPlacement.includes("-") ? computedPlacement.split("-")[0] : computedPlacement];

  return (
    <>
      {
        // eslint-disable-next-line
        cloneElement(children, getReferenceProps({ref: refs.setReference, ...children.props}))
      }
      <FloatingPortal>
        {/* This element used to measure its size for position calculation, and later we render true tooltip */}
        {open && state === "initial" ? (
          <div
            {...getFloatingProps({
              ref: refs.setFloating,
              className: "tooltip",
              style: {
                position: strategy,
                visibility: "hidden",
                top: 0,
                left: 0,
              },
            })}
          >
            {content}
          </div>
        ) : null}
        <AnimatePresence
          onExitComplete={() => {
            setState("unmounted");
          }}
        >
          {open && state === "positioned" ? (
            <motion.div
              animate={{opacity: 1, translateX: 0, translateY: 0}}
              exit={{opacity: 0, ...translate}}
              initial={isInstantPhase ? {} : {opacity: 0, ...translate}}
              layout="preserve-aspect"
              layoutId={groupId}
              transition={{duration: 0.2}}
              {...getFloatingProps({
                ref: refs.setFloating,
                className: "tooltip",
                style: {
                  position: strategy,
                  top: y || 0,
                  left: x || 0,
                },
              })}
            >
              <p>{content}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
}
