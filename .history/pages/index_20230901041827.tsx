import { BuilderComponent, builder, BuilderContent } from '@builder.io/react';

// IMPORTANT: import the file that you call Builder.registerComponent
// anywhere you have <BuilderComponent />
import '../builder-registry'

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getStaticProps = async (context: any) => {
    // Dynamically fetch latest content from Builder.io API
    const content = await builder.get('hero', { url: context.resolvedUrl });
    // console.log('content', content.data.blocks[0])
    return { props: {content: content || null }}
  }

export default function Home({ content } : { content: any } ) {
    return (
        <>
            <div id="hero">
                <BuilderComponent content={content} model="hero" />
            </div>
        </>
    )
}