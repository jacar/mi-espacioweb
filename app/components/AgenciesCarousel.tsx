import Image from "next/image"

const agencies = [
  { logo: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/01-1.png" },
  { logo: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/3-1.png" },
  { logo: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/2-1.png" },
  { logo: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/1-1.png" },
]

export default function AgenciesCarousel() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">He &nbsp;trabajado &nbsp; con:</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {agencies.map((agency, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={agency.logo || "/placeholder.svg"}
                alt={`Agency ${index + 1}`}
                width={200}
                height={100}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

