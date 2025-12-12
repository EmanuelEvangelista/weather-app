import {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  Select,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "../FullScreenSection/FullScreenSection.jsx";
import useSubmit from "../../hooks/useSubmit.jsx";
import {useAlertContext} from "../../context/alertContext.jsx";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const {isLoading, response, submit, setResponse } = useSubmit();
  const { onOpen } = useAlertContext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: (values) => {submit('https://jsonplaceholder.typicode.com/posts', values);},
    validationSchema: Yup.object({
      firstName: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      comment: Yup.string().min(20, 'Comment must be at least 20 characters').required('A message is required'),
      type: Yup.string().required('Please select a query type.')
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.type === 'success') {
        console.log("Response recibido:", response);
        // Muestra alerta de éxito y resetea el formulario
        onOpen('success', `Thank you ${formik.values.firstName}, your message was successfully sent to the test API!`);
        formik.resetForm();
      } else if (response.type === 'error') {
        // Muestra alerta de error
        onOpen('error', 'Something went wrong, please try again later.');
      }
      setTimeout(() => setResponse(null), 0);
    }
  }, [response?.type]);

  return (
    <>
      <FullScreenSection
        isDarkBackground
        py={16}
        spacing={8}
        borderRadius="xl"
        mb={8}
        boxShadow="lg"
        bg="gray.600"
        h="80vh"
      >
        <VStack
          w={["100%", "90%", "1024px"]} // móvil 100%, tablet 90%, desktop 1024px
          p={[4, 8, 32]} // padding más chico en móvil
          alignItems="flex-start"
          borderRadius="md"
        >
          <Heading as="h1" size="2xl" marginBottom={8}>
            Help weather app
          </Heading>
          <Box bg="gray.400" p={4} borderRadius="md">
            <Text fontSize="lg" color="teal.600" fontWeight="bold">
              This app lets you check the weather in a specific city using the{" "}
              <span style={{ color: "orange" }}>
                <a
                  href="https://openweathermap.org/api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenWeatherMap API
                </a>
              </span>
              . To check the weather, you must{" "}
              <Text
                as="span"
                color="blue.500"
                cursor="pointer"
                onClick={() => navigate("/findcity")}
                _hover={{ textDecoration: "underline" }}
              >
                first search
              </Text>
              {" "}for a city, and then select it from the Weather page.
            </Text>
          </Box>
        </VStack>
      </FullScreenSection>
      <FullScreenSection
        isDarkBackground
        borderRadius="xl"
        mb={8}
        boxShadow="lg"
        bg="#87CEEB"
        py={16}
        spacing={8}
      >
        <VStack
          w={["100%", "90%", "1024px"]} // móvil 100%, tablet 90%, desktop 1024px
          p={[4, 8, 32]} // padding más chico en móvil
          alignItems="flex-start"
          borderRadius="md"
        >
          <Heading as="h4" size="lg" id="contactus-section">
            Contact us
          </Heading>
          <Box p={6} rounded="md" w="100%" color="black">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4}>
                <FormControl
                  isInvalid={
                    !!formik.errors.firstName && formik.touched.firstName
                  }
                >
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    {...formik.getFieldProps("firstName")}
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!formik.errors.email && formik.touched.email}
                >
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!formik.errors.type && formik.touched.type}
                >
                  <FormLabel htmlFor="type">Query type</FormLabel>
                  <Select
                    id="type"
                    name="type"
                    {...formik.getFieldProps("type")}
                  >
                    <option value="">Select option</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </Select>
                  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!formik.errors.comment && formik.touched.comment}
                >
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    height={250}
                    {...formik.getFieldProps("comment")}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="purple"
                  width="full"
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </FullScreenSection>
    </>
  );
};

export default ContactUs;
