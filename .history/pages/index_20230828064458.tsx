import { BuilderComponent, builder, BuilderContent } from '@builder.io/react';

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getStaticProps = async (context: any) => {
    // Dynamically fetch latest content from Builder.io API
    const content = await builder.get('hero', { url: context.resolvedUrl });
    // console.log('content', content.data.blocks[0])
    return { props: {content: content || null }}
  }

export default function Home({ content } : { content: BuilderContent } ) {
    return (
        <>
            <div id="hero">
                <BuilderComponent content={content} model="hero" />
            </div>
        </>
    )
}