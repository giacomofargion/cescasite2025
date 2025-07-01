import { SiBandcamp, SiSoundcloud } from "react-icons/si"
import { FaXTwitter } from "react-icons/fa6"
import type { SocialLink } from "@/types/portfolio"

export const socialLinks: SocialLink[] = [
  {
    name: "Bandcamp",
    icon: SiBandcamp,
    url: "https://francescafargion.bandcamp.com",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    url: "https://twitter.com/francescafargion",
  },
  {
    name: "SoundCloud",
    icon: SiSoundcloud,
    url: "https://soundcloud.com/francesca-fargion",
  },
]
