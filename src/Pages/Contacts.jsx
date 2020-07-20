import React from 'react';
import {Container, ListGroup} from "react-bootstrap";
import {MentionIcon } from "@primer/octicons-react";
import {OctofaceIcon  } from "@primer/octicons-react";
import {OrganizationIcon  } from "@primer/octicons-react";

const Contacts = () => {
    return (
        <Container>
            <ListGroup className='m-5'>
                <ListGroup.Item className='m-2 rounded border-0'>
                    <MentionIcon  size={24}  verticalAlign='middle' />
                    <b className='ml-3'>itmrgodsend@gmail.com</b>&nbsp;&nbsp; <em>(предпочитаемый способ связи)</em>
                </ListGroup.Item>
                <ListGroup.Item className='m-2 rounded border-0'>
                    <OctofaceIcon   size={24}  verticalAlign='middle' />
                     <a className='link ml-3' href='https://github.com/itmrgodsend'><b>GitHub</b></a>
                </ListGroup.Item>
                <ListGroup.Item className='m-2 rounded border-0'>
                    <OrganizationIcon    size={24}  verticalAlign='middle' />
                    <a className='link ml-3' href='https://hh.ru/resume/9461f0b5ff07ddfc060039ed1f73677864714b'><b>HeadHunter</b></a>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Contacts;