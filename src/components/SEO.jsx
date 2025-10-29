import { Title, Meta } from "react-head";


const SEO = ({title,description}) => {
  return (
    <>
      <Helmet>
        <Title>{title}</Title>
        <Meta
          name="description"
          content={description}
        />
        <link rel="canonical" href="https://www.mazenmahmoud.dev/" />
      </Helmet>
    </>
  )
}

export default SEO
