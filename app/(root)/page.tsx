export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/id" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace("/id");`,
        }}
      />
    </>
  )
}
