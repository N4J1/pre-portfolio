import {
  Heading,
  Button,
  InlineCode,
  Logo,
  Line,
  Background,
  Fade,
  IconButton,
  Column,
  Row,
} from "@/once-ui/components";
import { social } from "@/once-ui/resources/config";

export default function Home() {
  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="m"
          paddingLeft="m"
          paddingY="20"
        >
          <Logo
            iconSrc="/images/logo_perso.png"
            size="l"
            href="#"
            wordmark={false}
          />
          <Row gap="12" hide="s">
            <Button
              href={social.linkedin}
              prefixIcon="linkedin"
              size="s"
              label="LinkedIn"
              weight="default"
              variant="tertiary"
            />
            <Button
              href={social.github}
              prefixIcon="github"
              size="s"
              label="GitHub"
              weight="default"
              variant="tertiary"
            />
          </Row>
          <Row gap="16" show="s" horizontal="space-between" paddingRight="0">
            <IconButton
              href={social.linkedin}
              icon="linkedin"
              variant="tertiary"
            />
            <IconButton href={social.github} icon="github" variant="tertiary" />
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column
            fillWidth
            horizontal="center"
            gap="32"
            padding="32"
            position="relative"
          >
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
              <p style={{ fontSize: "12px" }}>
                New Portfolio Under Construction – Coming Soon!
              </p>
            </InlineCode>
            <Heading
              wrap="balance"
              variant="display-default-l"
              align="center"
              marginBottom="16"
            >
              {/* bold and  */}
              Hi, I’m{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontFamily: "serif",
                }}
              >
                Yassine
              </span>
              , Crafting digital solutions with creativity and code
            </Heading>
            <Button
              id="readDocs"
              target="_blank"
              label="Open Resume"
              href="https://drive.google.com/file/d/13aN9xOe44ZwJU_11XtEUpIzuKg1-oG-D/view?usp=sharing"
              variant="secondary"
              arrowIcon
            />
            <Column horizontal="center" paddingTop="64" fillWidth gap="24">
              <Button
                href="mailto:yassinenajidev@gmail.com"
                prefixIcon="email"
                size="s"
                label="yassinenajidev@gmail.com"
                weight="default"
                variant="secondary"
              />
              <Line
                maxWidth={4}
                marginBottom="16"
                background="neutral-alpha-medium"
              />
            </Column>
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
