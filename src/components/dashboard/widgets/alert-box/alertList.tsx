import { Box, Text, Button } from '@chakra-ui/react';
import { Alert } from '@/types/alertType';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import { FaRegCopy } from 'react-icons/fa6';
interface AlertListProps {
  alerts: Alert[];
}
export default function AlertList({ alerts }: AlertListProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const date = new Date(dateString);
    return `(last update: ${date.toLocaleDateString('en-US', options)} )`;
  };
  return (
    <Box bg={'#2B303E'} w={'95%'} p='2' color={'black'} zIndex={10}>
      {alerts.map((alert, index) => (
        <Box
          key={index}
          display={'flex'}
          flexDir={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          w={'100%'}
          p='2'
          bg='#282B38'
          mb='2'>
          <Box
            display={'flex'}
            w={'30%'}
            flexDir={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Text color={'red.600'} ml={"3"} fontSize="sm">{alert.title}</Text>
            <Text color='#827674' fontSize={'xs'}>
              {formatDate(alert.editedAt)}
            </Text>
          </Box>
          <Box
            display={'flex'}
            flexDir={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={'1'}>
            <Button size={'sm'} bg='#3B4254' color='white'>
              <Box p={0} pr={'2'}>
                <MdModeEditOutline />
              </Box>
              Edit
            </Button>
            <Button size={'sm'} bg='#3B4254' color='white'>
              <Box p={0} pr={'2'}>
                <FaRegCopy />
              </Box>
              Duplicate
            </Button>
            <Button size={'sm'} bg='#3B4254' color='white'>
              <Box p={0} pr={'2'}>
                <MdDelete />
              </Box>
              Delete
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
