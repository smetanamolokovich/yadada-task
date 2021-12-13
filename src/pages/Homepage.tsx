import { AddIcon } from '@chakra-ui/icons';
import { AspectRatio, Box, Button, HStack, Icon } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import Webcam from 'react-webcam';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdReplayCircleFilled } from 'react-icons/md';

const CircleIcon: React.FC = () => (
    <Icon viewBox='0 0 200 200' boxSize={8} color='red.500'>
        <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
    </Icon>
);

const Homepage: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const webcamRef = useRef<Webcam>(null);
    const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
        video: true,
        audio: false,
    });
    const videoRef = useRef<HTMLVideoElement>(null);

    const startRecord = useCallback(() => {
        setIsFinished(false);
        setIsRecording(true);
        startRecording();
    }, []);

    const stopRecord = useCallback(() => {
        setIsFinished(false);
        setIsRecording(false);
        stopRecording();
    }, []);

    useEffect(() => {
        videoRef.current?.addEventListener(
            'ended',
            () => {
                setIsFinished(true);
            },
            false
        );
    }, [mediaBlobUrl]);

    const handleReplay = () => {
        videoRef.current?.play();
        setIsFinished(false);
    };

    return (
        <Box mt={10}>
            <HStack spacing={5} align='center' justify='center'>
                {!isRecording ? (
                    <Button size='lg' leftIcon={<CircleIcon />} onClick={startRecord}>
                        Start recording
                    </Button>
                ) : (
                    <Button size='lg' onClick={stopRecord}>
                        Stop recording
                    </Button>
                )}
                {mediaBlobUrl && !isRecording && (
                    <Button
                        size='lg'
                        leftIcon={<Icon as={FaCloudUploadAlt} boxSize={6} />}
                        onClick={stopRecord}
                    >
                        Upload it
                    </Button>
                )}
            </HStack>
            <AspectRatio
                maxW='800px'
                mx='auto'
                mt={10}
                ratio={16 / 9}
                borderRadius='xl'
                overflow='hidden'
            >
                <>
                    {isRecording ? (
                        <Webcam audio={false} ref={webcamRef} screenshotFormat='image/jpeg' />
                    ) : (
                        <Box w='100%' h='100%' bgColor='black'>
                            It seems you did not start recording. Click button above.
                        </Box>
                    )}
                    {mediaBlobUrl && !isRecording && (
                        <video ref={videoRef} src={mediaBlobUrl} autoPlay></video>
                    )}
                </>
            </AspectRatio>
            {isFinished && (
                <Box textAlign='center' mt={5}>
                    <Button
                        size='lg'
                        onClick={handleReplay}
                        leftIcon={<Icon as={MdReplayCircleFilled} boxSize={6} />}
                    >
                        Replay it
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default Homepage;
