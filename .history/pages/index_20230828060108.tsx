import { BuilderComponent, builder, BuilderContent } from '@builder.io/react';

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function getStaticProps({ params } : { params: { page: string[] } }) {
  const urlPath = '/' + (params?.page?.join('/') || '');
  const hero = await builder
    .get('collection-hero', { userAttributes: { urlPath } })
    .toPromise();

  return {
    props: {
        hero: hero || null,
    },
  };
}

export default function Home({ hero } : { hero: any }) {
    return (
        <>
            <BuilderComponent model="collection-hero" content={hero} />
        </>
    )
}