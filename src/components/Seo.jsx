import { Title, Meta } from "react-head";

const SEO = ({title,description}) => {
  return (
    <>
        <Title>{title}</Title>
        <Meta
          name="description"
          content={description}
        />
        <link rel="canonical" href="https://www.mazenmahmoud.dev/" />
    </>
  )
}
export default SEO
