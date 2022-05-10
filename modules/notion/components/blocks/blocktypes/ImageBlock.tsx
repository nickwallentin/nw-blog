import Image from 'next/image';
export default function ImageBlock({ image }) {
  if (!image) {
    return null;
  }
  const hasCaption = image.caption.length > 0;
  const caption = hasCaption
    ? image.caption.map((cap) => cap.plain_text).join(' ')
    : '';
  return (
    <figure className=''>
      <span className='relative block aspect-w-16 aspect-h-10'>
        <Image
          src={image[image.type].url}
          layout='fill'
          objectFit='contain'
          alt={caption}
        />
      </span>
      {hasCaption && (
        <figcaption className='text-sm text-center'>{caption}</figcaption>
      )}
    </figure>
  );
}
