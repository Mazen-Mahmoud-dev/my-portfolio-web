const SEO = ({title,description}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <link rel="canonical" href="https://www.mazenmahmoud.dev/" />
      </Helmet>
    </>
  )
}

export default SEO
