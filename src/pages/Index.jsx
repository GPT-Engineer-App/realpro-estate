import { Box, Button, Container, Flex, Grid, Heading, Image, Input, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaUserTie, FaChartLine, FaHome, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navigation Bar */}
        <Box as="nav" bg="white" py={2} px={4} shadow="sm" position="sticky" top={0} zIndex={3}>
          <Flex justify="space-between" align="center">
            <Heading size="md" color="blue.600">
              RealStatePro
            </Heading>
            <Flex gap={4}>
              <Button leftIcon={<FaHome />} variant="ghost">
                Home
              </Button>
              <Button leftIcon={<FaUserTie />} variant="ghost">
                Agents
              </Button>
              <Button leftIcon={<FaChartLine />} variant="ghost">
                Analytics
              </Button>
              <Button leftIcon={<FaEnvelope />} variant="ghost">
                Contact Us
              </Button>
            </Flex>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex bg="gray.100" align="center" justify="center" p={10} direction="column">
          <Heading as="h1" size="2xl" mb={4}>
            Find Your Dream Home
          </Heading>
          <Flex as="form" w="full" maxW="md">
            <Input placeholder="Search by location, type, price..." variant="filled" mr={2} />
            <Button colorScheme="blue" px={8} rightIcon={<FaSearch />}>
              Search
            </Button>
          </Flex>
        </Flex>

        {/* Featured Properties */}
        <VStack spacing={8} py={10} align="stretch">
          <Heading as="h2" size="lg" px={8}>
            Featured Properties
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} px={8}>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </SimpleGrid>
        </VStack>

        {/* Footer */}
        <Box as="footer" bg="gray.800" color="white" py={4}>
          <Container maxW="container.md" centerContent>
            <Text>&copy; {new Date().getFullYear()} RealStatePro. All rights reserved.</Text>
            <Text>Privacy Policy | Terms of Service</Text>
          </Container>
        </Box>
      </Flex>
    </Container>
  );
};

const PropertyCard = () => (
  <Box bg="white" shadow="md" borderRadius="lg" overflow="hidden">
    <Image src="https://images.unsplash.com/photo-1613082294483-fec382d8367e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lfGVufDB8fHx8MTcxNTQ0NjQwNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Property Image" />
    <Box p={4}>
      <Text fontWeight="bold" fontSize="lg">
        $500,000
      </Text>
      <Text fontSize="md" color="gray.600">
        1234 Fancy Ave, Big City
      </Text>
      <Link color="blue.500" mt={2} display="block">
        View Details
      </Link>
    </Box>
  </Box>
);

export default Index;
