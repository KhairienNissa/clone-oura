import React, { useState } from 'react'
import Cobasatu from './cobasatu'


const testimoni = [
    {
        id:1,
        name: 'Apa itu web hosting?',
        desc: 'Web hosting adalah layanan penyimpanan data agar suatu website dapat diakses secara online. Data website ini ditampung dalam ruang penyimpanan bernama server web hosting yang selalu aktif 24 jam setiap hari. Kualitas layanan web hosting dapat menentukan kesuksesan bisnis maupun segala aktivitas website Anda. Tanpa layanan web hosting yang berkualitas, suatu website tidak mungkin dapat diakses dengan baik. Oleh karena itu, selalu gunakan layanan web hosting terbaik untuk website Anda',
    },
    {
        id:2,
        name: 'Mengapa saya harus menggunakan web hosting Indonesia?',
        desc: 'Web hosting Indonesia adalah layanan hosting dengan server yang berlokasi di Indonesia. Lokasi ini sangat berpengaruh terhadap performa suatu website, terutama jika target pengunjung website Anda juga berada di dalam wilayah Indonesia. Saat ini Niagahoster menggunakan Green Data Center Tier-4 DCI Indonesia berstandar internasional. Data center yang kami gunakan merupakan bagian dari Equinix, penyedia data center berkualitas tinggi terbaik di dunia dengan jaminan uptime hingga 99,99%',
    },
    {
        id:3,
        name: 'Apa yang dimaksud dengan Unlimited Hosting di Niagahoster?',
        desc: 'Unlimited Hosting Niagahoster tidak menetapkan batasan khusus dalam hal resource atau sumber daya website yang Anda butuhkan. Meskipun demikian, kami menetapkan Fair Usage Policy (FUP) atau kebijakan penggunaan secara adil yang berlaku untuk semua akun yang menggunakan paket Bayi, Pelajar, Personal, serta Bisnis. Penggunaan secara wajar sangat kami rekomendasikan, mengingat penggunaan resource CPU, RAM, serta disk space secara berlebihan dalam sebuah server dapat berdampak pada performa website milik pengguna lain yang tersimpan dalam server yang sama. Cek fitur Hosting Unlimited',
    },
    {
        id:4,
        name: 'Paket web hosting mana yang tepat untuk saya?',
        desc: 'Niagahoster menawarkan beragam paket hosting yang bisa Anda pilih sesuai kebutuhan. Oleh karena itu, kami sangat menyarankan Anda untuk mengetahui kebutuhan Anda terlebih dahulu. Apakah itu website company profile, blog pribadi, atau toko online. Tiap jenis website ini memerlukan keperluan resource yang beragam. Sebagai contoh, jika Anda menginginkan website instan sederhana dan langsung online, Anda bisa menggunakan paket Unlimited Hosting. Kemudian, untuk website dengan fitur yang bisa dikustomisasi sendiri, Anda dapat menggunakan Cloud VPS. Apabila Anda membutuhkan web hosting dengan dedicated server yang fully managed, Anda bisa memanfaatkan Cloud Hosting. Soal bantuan, Anda tidak perlu khawatir. Tim support kami siap membantu Anda kapan saja!',
    },
    {
        id:5,
        name: 'Apakah semua pembelian hosting mendapatkan domain gratis?',
        desc: 'Hanya di Niagahoster Anda bisa mendapatkan domain gratis dengan membeli web hosting. Gratis domain hanya berlaku untuk pembelian paket Unlimited Hosting (Pelajar, Personal, dan Bisnis) dan semua paket Cloud Hosting. Anda tinggal pilih, arahkan ke akun hosting, dan domain gratis Anda siap digunakan',
    },
    {
        id:6,
        name: 'Jika sudah memiliki website, apakah saya bisa transfer web hosting ke Niagahoster?',
        desc: 'Transfer hosting tidaklah rumit. Tim support kami siap membantu memindahkan hosting Anda ke Niagahoster kapan pun Anda inginkan. Caranya, Anda hanya perlu mengisi formulir dan permintaan transfer akan kami proses secepatnya. Transfer hosting Anda ke layanan Niagahoster sekarang dan dapatkan diskon hingga 50%! Silakan hubungi tim support kami untuk mendapatkan informasi lebih lengkap',
    },
    
 ]




const Cobadua = () => {
 

        const [clicked, setClicked] = useState('0')


        const handleToggle = (id) => {
            if (clicked === id) {
                return setClicked('0')
            }
            setClicked(id)
        }



  return (
    // <div>
    //     <ul >
    //         {testimoni.map((testimoniData, id) => (
    //             <TestimoniItem key={id} testimoniData={testimoniData} 
    //             />

    //         ))}
    //     </ul>
    // </div>
    <div className='mb-[100px] '>
      
        <ul >
            {testimoni.map((testimoniData, id) => (
                <Cobasatu key={id} testimoniData={testimoniData} onToggle={() => handleToggle(id)} 
                active={clicked === id}
                />

            ))}
        </ul>
    </div>
  )
}

export default Cobadua