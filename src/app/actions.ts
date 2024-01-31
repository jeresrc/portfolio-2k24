'use server'
import {Resend} from 'resend'
import {EmailTemplate} from '@/components/EmailTemplate'
import {formSchema} from '@/utils/validation'
import {ZodError} from 'zod'
export type State =
  | {
      status: 'success'
      message: string
    }
  | {
      status: 'error'
      message: string
      errors?: Array<{
        path: string
        message: string
      }>
    }
  | null

export const sendEmail = async (
  prevState: State | null,
  data: FormData
): Promise<State> => {
  try {
    const {name, email, message} = formSchema.parse(data)

    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Form Submission',
        react: EmailTemplate({name, email, message}),
      })
    } catch (error) {
      console.log(error)
    }

    return {
      status: 'success',
      message: `Welcome, ${name} ${email ? message : ''}!`,
    }
  } catch (e) {
    // In case of a ZodError (caused by our validation) we're adding issues to our response
    if (e instanceof ZodError) {
      return {
        status: 'error',
        message: 'Invalid form data',
        errors: e.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: `Server validation: ${issue.message}`,
        })),
      }
    }
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.',
    }
  }
}
