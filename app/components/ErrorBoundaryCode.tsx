import {
  Button,
  Text,
  Container,
  Group,
  Title,
  Code,
  createStyles,
} from "@mantine/core";
import { Document } from "./Document";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

export const ErrorBoundary = ({ error }: { error: Error }) => {
  const { classes } = useStyles();
  console.error(error);
  return (
    <Document>
      <Container className={classes.root}>
        <div className={classes.label}></div>
        <Title className={classes.title}>Something went wrong</Title>
        <Text
          color="dimmed"
          size="lg"
          align="center"
          className={classes.description}
        >
          <Code block>{error.stack ? error.stack : error.message}</Code>
        </Text>
        <Group position="center">
          <Button onClick={() => history.back()} variant="subtle" size="md">
            Go back
          </Button>
        </Group>
      </Container>
    </Document>
  );
};
