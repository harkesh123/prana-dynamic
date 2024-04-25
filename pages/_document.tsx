import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import {
    DocumentHeadTags,
    DocumentHeadTagsProps,
    documentGetInitialProps,
  } from '@mui/material-nextjs/v13-pagesRouter';

  export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <script async
    src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&loading=async&callback=initMap`}>
</script>
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      <Head >
      <DocumentHeadTags {...props} />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx:any) => {
   const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
  };