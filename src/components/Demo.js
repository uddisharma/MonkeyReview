import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Text, Image, Stack, Card, CardBody, Heading, Button, CardFooter } from '@chakra-ui/react'
import Nav from './Nav';
function Demo() {
    const [Context, setContext] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://contests7.p.rapidapi.com/contests',
        headers: {
            'X-RapidAPI-Key': '593a518e59msh31aa9356440ad74p1853ffjsncc549ec7f34a',
            'X-RapidAPI-Host': 'contests7.p.rapidapi.com'
        }
    };
    useEffect(() => {
        axios.request(options).then(function (response) {
            setContext(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    // console.log(Context)
    return (
        <>
            {/* <Nav /> */}
            <div style={{ paddingTop: '100px' }}>
                {Context.map((e) => (
                    <>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            width="60%"
                            margin="auto"
                            padding="20px"
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>{e.site}</Heading>
                                    <Text fontSize="20px" size='md'> Contest Name : {e.name}</Text>
                                    <Text fontSize="20px" size='md'> This Project is based on : {e.status}</Text>
                                    <Text fontSize="20px" size='md'> Start From : {e.start_time}</Text>
                                    <Text fontSize="20px" size='md'> End At : {e.end_time}</Text>
                                    <Text fontSize="20px" size='md'> For more details register down</Text>
                                </CardBody>

                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue'>
                                        <a href={e.url}>Register Here</a>
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </>
                ))}

            </div>
        </>
    )
}

export default Demo