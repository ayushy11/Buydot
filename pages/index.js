import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { baseUrl, fetchApi } from "@/utils/fetchApi";

import Property from "../components/Property/Property"; 

// import { motion, AnimatePresence } from "framer-motion";
// import { css, useTheme } from "@emotion/react";

const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} alt="banner" width={500} height={300} />
    <Box p="5">
      <Text fontSize="sm" fontWeight="medium" color="gray.500">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" pt="3" pb="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Layout title="Buydot">
      <Banner
        purpose={"RENT A HOME"}
        title="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose={"BUY A HOME"}
        title="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Layout>
  );
}

export async function getStaticProps() {
  const propertiesForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertiesForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertiesForSale: propertiesForSale?.hits,
      propertiesForRent: propertiesForRent?.hits,
    },
  };
}
