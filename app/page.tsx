import Categories from '@/components/Categories'
import LoadMore from '@/components/LoadMore'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='flex-start flex-col paddings mb-16'>
      <Categories />
      Posts
      <LoadMore />
    </section>
  )
}
