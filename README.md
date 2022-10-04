## React Context Portal Modal

-   use of context api hook in a optimized manner
-   we have two hooks for this modal one is for toggling the modal in open or close state => useModalUpdater()
    and one hook for the getting the modalState id is present or not => useModalState()
    as the end user have no use case of the useModalState() it is used by the modal component internally
-   use of the react portal also
-   get the state of the modal also
-   close the modal by the escape key
-   solves the problems of the z-index
-   close the modal by outside click also
-   fires a function on the close of the modal
-   hide the modal by the dispatcher function also
-   close the modal by the close button provided inside the modal also
-   do not render the modal dom elements until the we specify to show the modal
-   use of context so we can call the modal so no need of the props drilling and managing states

//important props
1-> id = "dummy_id" (string) //id name is very necessary, this id attached to the which is siblings to the root div , modal should have a unique id
2-> onClose={()=>{}} (function) // function , when you want to run on the closing of the modal
3-> closeButton (Boolean) (default -> true)// if you want to show the close button
4-> closeOnEscapeKey (Boolean) (default -> false) //if you want to close the modal on the "escape" key
5-> clickOutsideClose (Boolean) (default -> false) //if you want to close the modal on the click of the outside
6-> scrollLock (Boolean) (default->true) //if you want dont want to scrolling of the background (body)

//if there is the onClose prop is passed to the <Modal onClose={}> component so it will fire every time as the modal is closed by the
escape button , cross button , outside clicks or programmatically close of the modal (by the Modal.hide("id"))
so there are 4 ways so to close this modal
1-> outside click
2-> escape button
3-> close button
4-> programmatically Modal.hide("id")
