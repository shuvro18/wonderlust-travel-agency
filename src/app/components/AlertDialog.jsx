"use client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


const AlertDialogPage = ({ destination, deleteDestination }) => {
    const {_id} = destination
    console.log(_id)
    const deleteButton = async(ids) => {
         await deleteDestination(ids)
         toast.success(`Successfully deleted ${destination.name}`)
         redirect("/destination")
    }
    return (
        <div>
            <AlertDialog>
                <Button variant="danger">Delete Project</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>My Awesome Project</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={()=>{deleteButton(_id)}} slot="close" variant="danger">
                                    Delete Project
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default AlertDialogPage;