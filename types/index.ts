export interface FormProps {
  member: MemberProps
  setMember: (post: MemberProps) => void
  submitting: boolean
  setSubmitting: (submitting: boolean) => void
  handleSubmit: (event: any) => void
}

export interface MemberProps {
  email: string
  firstname: string
  lastname: string
}
