import React from "react";
import { Box, Heading, Text, Button, Stack, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaPlus, FaVoteYea } from "react-icons/fa";

const Home: React.FC = () => {
  const router = useRouter();

  const handleCreateVote = (): void => {
    console.log("Navigating to create vote page");
    router.push("/create-vote");
  };

  const handleVote = (): void => {
    console.log("Navigating to vote page");
    router.push("/vote");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgGradient="linear(to-r, blackAlpha.900, blackAlpha.800)"
      color="white"
      textAlign="center"
      px={4}
    >
      <Heading
        as="h1"
        size="2xl"
        mb={4}
        bgGradient="linear(to-l, teal.400, blue.500)"
        bgClip="text"
      >
        Votechainz
      </Heading>
      <Text fontSize="xl" mb={8} maxW="lg">
        La démocratie décentralisée à portée de main. Participez aux décisions
        importantes avec transparence et sécurité grâce à la technologie
        blockchain.
      </Text>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Button
          leftIcon={<Icon as={FaPlus} />}
          colorScheme="teal"
          variant="solid"
          size="lg"
          onClick={handleCreateVote}
          boxShadow="lg"
          _hover={{ boxShadow: "xl", transform: "translateY(-2px)" }}
        >
          CRÉER UN VOTE
        </Button>
        <Button
          leftIcon={<Icon as={FaVoteYea} />}
          colorScheme="blue"
          variant="solid"
          size="lg"
          onClick={handleVote}
          boxShadow="lg"
          _hover={{ boxShadow: "xl", transform: "translateY(-2px)" }}
        >
          VOTER
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
