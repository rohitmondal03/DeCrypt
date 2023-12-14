import Image from 'next/image'
import { ImageResponse } from 'next/og'

import { getServerSideUserDetails } from '@/lib/getServerSideUserDetails'


// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'


// Image generation
export default function Icon() {
  // const userDetails = await getServerSideUserDetails();

  // const userProfilePic = userDetails?.image || "";  //user's profile pic


  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // color: 'white',
        }}
      >
        {/* <Image src={userProfilePic} alt='users profile pic' /> */}
        D
      </div>
    ),
    {
      ...size,
    }
  )
}