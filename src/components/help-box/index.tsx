import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['AcademyOwner'];
  const roles = ['AcademyOwner', 'AcademyOwner', 'Coach', 'Player', 'Parent'];
  const applicationName = 'radical-football69';
  const tenantName = 'Academy';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Academy Owner:
1. As an Academy Owner, I want to be able to create and manage multiple teams within my academy, so I can efficiently organize my players and coaches.
2. As an Academy Owner, I want to be able to assign coaches to specific teams, so they can focus on developing the players in their assigned team.
3. As an Academy Owner, I want to have an overview of all player profiles within my academy, so I can track their progress and development.
4. As an Academy Owner, I want to be able to communicate with coaches, players, and parents through the platform, so I can easily share important information and updates.
5. As an Academy Owner, I want to be able to manage and track payments from parents, so I can ensure the financial stability of my academy.

Coach:
1. As a Coach, I want to be able to access and review individual player profiles, so I can better understand their strengths, weaknesses, and areas for improvement.
2. As a Coach, I want to be able to create and assign training plans and exercises to individual players or the entire team, so I can help them develop their skills.
3. As a Coach, I want to be able to track player attendance and participation in training sessions and matches, so I can monitor their commitment and progress.
4. As a Coach, I want to be able to communicate with players and parents through the platform, so I can provide feedback and updates on player development.
5. As a Coach, I want to be able to collaborate with other coaches within the academy, so we can share ideas and best practices for player development.

Player:
1. As a Player, I want to be able to create and update my individual player profile, so I can showcase my skills, achievements, and progress to coaches and scouts.
2. As a Player, I want to be able to access and complete assigned training plans and exercises, so I can improve my skills and performance.
3. As a Player, I want to be able to track my attendance and participation in training sessions and matches, so I can monitor my commitment and progress.
4. As a Player, I want to be able to communicate with my coach and teammates through the platform, so I can ask questions, receive feedback, and stay informed about team updates.

Parent:
1. As a Parent, I want to be able to view my child's individual player profile, so I can track their progress and development in the academy.
2. As a Parent, I want to be able to monitor my child's attendance and participation in training sessions and matches, so I can support their commitment to the sport.
3. As a Parent, I want to be able to communicate with my child's coach through the platform, so I can ask questions, provide feedback, and stay informed about my child's development.
4. As a Parent, I want to be able to manage and track payments for my child's academy membership, so I can ensure their continued participation in the program.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
