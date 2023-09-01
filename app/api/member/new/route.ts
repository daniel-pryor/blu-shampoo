import { connectToDB } from '@/utils/database'
import Member from '@/models/member'

export const POST = async (req: Request) => {
  const { email, firstname, lastname } = await req.json()
  try {
    await connectToDB()
    const newMember = new Member({
      email,
      firstname,
      lastname,
    })

    const memberExists = await Member.findOne({ email })

    if (memberExists) {
      return new Response('User already exists', {
        status: 409,
      })
    }
    await newMember.save()
    return new Response(JSON.stringify(newMember), {
      status: 201,
    })
  } catch (error) {
    console.log(error)
    return new Response('Failed to create a new post', { status: 500 })
  }
}
