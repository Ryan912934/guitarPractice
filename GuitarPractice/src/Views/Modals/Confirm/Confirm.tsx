import { Button } from "@chakra-ui/button"
import { Text } from "@chakra-ui/react"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"

interface ConfirmProps {
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
    
  text: string;
}

export function Confirm(props: ConfirmProps) {



  return (
  <Modal isOpen={props.isOpen} onClose={props.onCancel}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Are you sure?r</ModalHeader>
      <ModalBody>
          <Text>
            {props.text}
          </Text>
      </ModalBody>

      <ModalFooter>
        <Button onClick={props.onConfirm}> Cancel </Button>
        <Button onClick={props.onCancel}> Confirm </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )

}
