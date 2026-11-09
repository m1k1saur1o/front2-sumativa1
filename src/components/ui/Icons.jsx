function Icon({ children, className = 'size-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export const HomeIcon = (props) => (
  <Icon {...props}><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></Icon>
)
export const ChatIcon = (props) => (
  <Icon {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></Icon>
)
export const InfoIcon = (props) => (
  <Icon {...props}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></Icon>
)
export const PlusIcon = (props) => (
  <Icon {...props}><path d="M12 5v14M5 12h14" /></Icon>
)
export const MinusIcon = (props) => (
  <Icon {...props}><path d="M5 12h14" /></Icon>
)
export const ListIcon = (props) => (
  <Icon {...props}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></Icon>
)
export const CartIcon = (props) => (
  <Icon {...props}>
    <circle cx="9" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
    <path d="M2 3h3l2.6 12.4a1.5 1.5 0 0 0 1.5 1.2h8.8a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
  </Icon>
)
export const TrashIcon = (props) => (
  <Icon {...props}><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v5M14 11v5" /></Icon>
)
export const ArrowLeftIcon = (props) => (
  <Icon {...props}><path d="M19 12H5M11 6l-6 6 6 6" /></Icon>
)
export const PinIcon = (props) => (
  <Icon {...props}><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></Icon>
)
export const MailIcon = (props) => (
  <Icon {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>
)
export const PhoneIcon = (props) => (
  <Icon {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </Icon>
)
export const ClockIcon = (props) => (
  <Icon {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>
)
