import { Group, Text, rem, Image, SimpleGrid, Avatar, Box, Center, Stack } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useContext, useState } from 'react';
import { StyledButton } from '../Buttons/StyledButton';

import styles from './DropZone.module.css';
import { GlobalContext } from '@/context/ContextGlobal';
import { SpaceYMain } from '../Spacers/Spacers';

type TProps = {
  setPhotoUpload: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DropZone({ setPhotoUpload, ...props }: TProps & Partial<DropzoneProps>) {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const { isMobile } = useContext(GlobalContext);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Avatar
        key={index + files.length}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
        size={100}
      />
    );
  });
  return (
    <>
      {files.length == 0 ? (
        <Box  w="100%">
          <Dropzone
            onDrop={setFiles}
            //style={{border: '2px dashed lightgray'}}
            w="100%"
            // onDrop={(files) => console.log('accepted files', files)}
            className={styles.dashed_border + ' cursor-pointer'}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={3 * 1024 ** 2}
            maxFiles={1}
            accept={IMAGE_MIME_TYPE}
            {...props}
          >
            <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
              <Dropzone.Accept>
                <IconUpload
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                  stroke={1.5}
                />
              </Dropzone.Idle>

              <div>
                <Text size="md" inline ta="center" hiddenFrom="sm">
                  Перетащите сюда фотографию или кликните чтобы выбрать
                </Text>
                <Text size="md" inline ta="center">
                  Перетащите сюда фотографию или кликните чтобы выбрать
                </Text>
                {/*} <Text size="sm" c="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
  </Text> */}
              </div>
            </Group>
          </Dropzone>
          {files.length == 0 && <>
          <SpaceYMain />
          <Center>
            <StyledButton
              appearence="main_second_outlined"
              onClick={() => {
                
                setPhotoUpload(false);
              }}
            >
              Отмена
            </StyledButton>
          </Center>
          </>}
        </Box>
      ) : (
        <Center w="100%" className={styles.dashed_border}>
          <Stack align="center" miw={{ base: '100%', xs: '350px' }} mih={220} justify="center">
            {previews}
            <Group
              grow={isMobile ? false : true}
              miw={{ base: '100%', xs: '350px' }}
              wrap="wrap"
              justify="center"
            >
              <StyledButton
                appearence="main_second_outlined"
                onClick={() => {
                  console.log('files', files);
                  setFiles([]);
                  setPhotoUpload(false);
                }}
              >
                Отмена
              </StyledButton>
              <StyledButton appearence="main_second">Сохранить</StyledButton>
            </Group>
          </Stack>
        </Center>
      )}
    </>
  );
}
