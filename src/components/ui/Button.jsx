import { buttonClasses } from './buttonStyles.js'

export default function Button({ variant, className, type = 'button', ...props }) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />
}
