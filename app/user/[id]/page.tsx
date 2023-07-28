import Image from 'next/image'

export default async function User({ params } : { params: { id: string } }) {
  const storeInfo = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then((res) => res.json())
    .then((json) => json);

  return (
    <div>
      <h2>user - {params.id}</h2>
      <section>
        <div>title: {storeInfo.title}</div>
        <div>description: {storeInfo.description}</div>
        <div>category: {storeInfo.category}</div>
        <div>
          <Image src={storeInfo.image} width={400} height={400} alt='img' />
          {/* <img src={storeInfo.image} alt="" /> */}
        </div>
      </section>
      <div>{JSON.stringify(storeInfo)}</div>
    </div>
  );
}

export const runtime = 'edge';