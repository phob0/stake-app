import { BuilderComponent, builder, BuilderContent } from '@builder.io/react';

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getStaticProps = async (context: any) => {
    // Dynamically fetch latest content from Builder.io API
    const content = await builder.get('hero', { url: context.resolvedUrl });
    return { props: { content } }
  }

export default function Home({ props } : { props: { content: any } }) {
    return (
        <>
            <BuilderComponent content={props.content} model="hero" />
        </>
    )
}