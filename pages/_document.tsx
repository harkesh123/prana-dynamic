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
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDx2AV0SbkQUOR8lKWTU7iGixZlQ4GVZ4E&loading=async&callback=initMap">
</script>
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