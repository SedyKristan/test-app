import Layout from "@components/Layout";
import { useRouter } from "next/router";
import authFormFields from "@modules/Auth/utils/authFormFields.json";
import Auth from "@modules/Auth";
import { useContext } from "react";

const AuthPage = ({ formFields, ctaText, module }) => {
  const router = useRouter();

  return (
    <Layout display={{ navbar: false, titlebar: false, footer: false }}>
      <Auth formFields={formFields} module={module} ctaText={ctaText} />
    </Layout>
  );
};

export default AuthPage;

export const getStaticPaths = async () => {
  let paths = ["sign-in", "sign-up"].map((page) => ({
    params: { auth: page },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const config = {
    "sign-in": {
      name: "Sign In",
      ctaText: "Log in",
    },
    "sign-up": {
      name: "Sign Up",
      ctaText: "Sign up",
    },
  };

  const data = config[params.auth] || {};

  const filteredFormFields = authFormFields.formFields.filter((field) => {
    return field.module.includes(params.auth);
  });

  return {
    props: {
      formFields: filteredFormFields,
      module: data.name || "",
      ctaText: data.ctaText || "",
    },
  };
};
