import React, { useRef, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function ProjectModal({ show, onHide, projectData }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className="project-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title as="h4">{projectData.title}</Modal.Title>
      </Modal.Header>
      <div className="project-modal-body">
        <Image src={projectData.image_url.length !== 0 ? projectData.image_url : "./img/square-pattern.svg"} fluid />
        <Modal.Body>
          {/* Members section, empty if there's no member in that field */}
          {
            projectData.project_lead.length !== 0 &&
              <section className="project-members">
                {
                  projectData.project_lead !== "" &&
                    <div>
                      <span className="project-members-title">Project Lead: </span>
                      <span>{projectData.project_lead}</span>
                    </div>
                }
                {
                  projectData.sdes.length !== 0 &&
                    <div>
                      <span className="project-members-title">Software Developer{projectData.sdes.length > 1 && 's'}: </span>
                      <span>{projectData.sdes.join(', ')}</span>
                    </div>
                }
                {
                  projectData.product_managers.length !== 0 &&
                    <div>
                      <span className="project-members-title">Product Manager{projectData.product_managers.length > 1 && 's'}: </span>
                      <span>{projectData.product_managers.join(', ')}</span>
                    </div>
                }
              </section>
          }
          {/* Description - New line per sentence */}
          <section className="project-description">
            {
              projectData.description.split('. ').map((sentences, index, array) => 
                <p>{sentences}{(index !== array.length - 1) && '.'}</p>
              )
            }
          </section>
        </Modal.Body>
      </div>
      <Modal.Footer>
        <Button className="color" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}