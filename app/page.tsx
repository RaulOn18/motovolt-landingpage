"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Zap, Leaf, Volume2, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const listMaps = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4108310139272!2d106.71237207551613!3d-6.209420093778454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9e4e1276059%3A0x2e0712779240c523!2sHonda%20Motor%2CTangerang!5e0!3m2!1sid!2sid!4v1751495142784!5m2!1sid!2sid",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4580138881356!2d106.71319957551616!3d-6.203152593784615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9f07d38b6d3%3A0xedccd5bc4bba9452!2sHonda%20Pradana%20Karang%20Tengah%20Service%20%26%20Body%20Paint!5e0!3m2!1sid!2sid!4v1751495283734!5m2!1sid!2sid",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4776649894507!2d106.6125431755162!3d-6.200540393787185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffd69f3b8831%3A0xfc8e1401a4241792!2sHonda%20Cengkareng%20Sparepart!5e0!3m2!1sid!2sid!4v1751495322482!5m2!1sid!2sid"
  ];
  const [selectedMap, setSelectedMap] = useState(listMaps[0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-red-600">Motovolt</div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#product" className="text-gray-700 hover:text-red-600 transition-colors">
                Product
              </Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-red-600 transition-colors">
                How It Works
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-red-600 transition-colors">
                About
              </Link>
              <Link href="#locations" className="text-gray-700 hover:text-red-600 transition-colors">
                Locations
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
                Contact Us
              </Link>
            </nav>

            <Button className="bg-red-600 hover:bg-red-700">Download App</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-red-600/90 to-red-700/90">
        <div className="absolute inset-0">
          <Image src="https://etimg.etb2bimg.com/thumb/msid-98983134,imgsize-269972,width-1200,height=765,overlay-etenergy/power/motovolt-acquires-stake-in-german-electric-oem.jpg" alt="Motovolt Electric Vehicles" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-red-600/70"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Motovolt</div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">#JalanTanpaPolusi</h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed">
              Motovolt adalah layanan motor listrik sharing pertama di Indonesia yang legal untuk dikenakan di jalan
              raya, focus pada kenyamanan dan kemudahan untuk mencapai tujuan yang diinginkan.
            </p>
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3">
              Selengkapnya
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Floating Chat Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button className="animate-bounce bg-red-600 hover:bg-red-700 hover:cursor-pointer rounded-full p-4 shadow-lg" onClick={() => { window.open("https://wa.me/628978653840", "_blank") }}>
            <Phone className="w-6 h-6" />
            <span> Hubungi Kami</span>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">EKONOMIS</h3>
                <p className="text-gray-600">
                  Harga Sewa yang terjangkau dan durasi sewa yang dapat disesuaikan dengan kebutuhan anda.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">RAMAH LINGKUNGAN</h3>
                <p className="text-gray-600">
                  Tanpa emisi gas buang, tanpa berkontribusi untuk masa depan bumi yang lebih baik.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">TANPA SUARA</h3>
                <p className="text-gray-600">
                  Selain tanpa polusi udara, unit motor listrik Motovolt juga tanpa polusi suara.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/motor.png"
                alt="Motovolt Electric Scooter"
                width={400}
                height={500}
                className="rounded-lg"
              />
            </div>

            <div className="bg-red-600 text-white p-8 lg:p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Tentang MOTOVOLT</h2>
              <p className="text-lg leading-relaxed mb-6">
                Sejak tahun 2019 MOTOVOLT hadir melayani sewa kendaraan listrik. Kami menyediakan layanan sewa yang
                mengutamakan kenyamanan dengan sistem terkemuka dan juga aman. Untuk mewujudkan penggunaan secara massal
                sehingga berdampak positif pada negara kita Indonesia.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Motovolt berkomitmen untuk menjadi bagian penyewaan yang terpercaya untuk semua kalangan.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Langkah 1</h3>
                  <p className="text-gray-600">
                    Hubungi whatsapp kami +62 896-2536-5461 untuk mengajukan sewa motor atau sepeda listrik.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Langkah 2</h3>
                  <p className="text-gray-600">
                    Mengisi format yang disediakan dan mengikuti langkah yang dijelaskan di whatsapp.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Langkah 3</h3>
                  <p className="text-gray-600">Untuk aplikasi Motovolt dan lakukan registrasi sesuai dengan panduan.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Langkah 4</h3>
                  <p className="text-gray-600">Hubungi kami melalui aplikasi dan unit siap digunakan.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                <Image
                  src="/discover.jpg"
                  alt="Motovolt Mobile App"
                  width={250}
                  height={400}
                  className="rounded-xl"
                />
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-lg font-semibold text-gray-900">
                  Sewa sepeda listrik dan motor listrik bersama Motovolt
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-black text-white hover:bg-gray-800">
                    <img src="https://cdn.simpleicons.org/googleplay/white" alt="Play Store" width={20} height={20} className="mr-2" />
                    Download
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    <img src="https://cdn.simpleicons.org/apple/white" alt="App Store" width={20} height={20} className="mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="locations" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Temukan stasiun kami di:</h2>
              <div className="bg-gray-100 p-4 rounded-lg mb-8">
                <select className="w-full p-3 border border-gray-300 rounded-lg" onChange={(e) => setSelectedMap(listMaps[Number(e.target.value)])}>
                  <option value={1}>Stasiun Sunter</option>
                  <option value={2}>Stasiun Kemayoran</option>
                  <option value={3}>Stasiun Mangga Dua</option>
                </select>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold">Perkantoran Royal Plaza</p>
                      <p className="text-gray-600">
                        Jl. Danau Agung Selatan Blok C3 No. 2A Sunter, RT.5/RW.11, Sunter Agung, Tj. Priok, Kota Jkt
                        Utara, Daerah Khusus Ibukota Jakarta 14350
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-semibold">Marketing Representative</p>
                      <p className="text-gray-600">+62 896-2536-5461</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-semibold">Customer Service</p>
                      <p className="text-gray-600">+62 896-2536-5461</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">cs@motovolt.id</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center space-x-2 mb-4">
                    <input
                      type="email"
                      placeholder="Your Email Here"
                      className="flex-1 p-3 border border-gray-300 rounded-lg"
                    />
                    <Button className="bg-red-600 hover:bg-red-700">Subscribe</Button>
                  </div>

                  <div className="flex space-x-4">
                    <Link href="#" className="text-red-600 hover:text-red-700">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">📷</div>
                    </Link>
                    <Link href="#" className="text-red-600 hover:text-red-700">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">📘</div>
                    </Link>
                    <Link href="#" className="text-red-600 hover:text-red-700">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">📺</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <iframe src={selectedMap} width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-red-600 mb-4">Motovolt</div>
              <p className="text-gray-400 mb-4">Sewa sepeda listrik dan motor listrik terpercaya di Indonesia.</p>
              <div className="flex space-x-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  <img src="https://cdn.simpleicons.org/googleplay/white" alt="Play Store" width={20} height={20} className="mr-2" />
                  Download
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800">
                  <img src="https://cdn.simpleicons.org/apple/white" alt="App Store" width={20} height={20} className="mr-2" />
                  Download
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Electric Bikes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Electric Motorcycles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Motovolt. All rights reserved. Powered by Motovolt Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
