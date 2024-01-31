import {zfd} from 'zod-form-data'
import {z} from 'zod'

export const formSchema = zfd.formData({
  name: zfd.text(z.string().min(2, 'Too short').max(20, 'Too long')),
  email: zfd.text(z.string().email('Invalid email')),
  message: zfd.text(z.string().min(2, 'Too short').max(20, 'Too long')),
})
