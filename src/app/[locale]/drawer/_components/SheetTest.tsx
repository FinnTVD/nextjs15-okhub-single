import {Button} from '@/components/ui/button'
import {Minus, Plus} from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import DrawerProvider from '@/provider/DrawerProvider'

export default function SheetTest({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetContent className='h-screen w-full overflow-y-auto'>
        <SheetHeader className='hidden'>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className='h-[200vh] w-full'>
          <div className='h-[110vh] w-full bg-white'></div>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant='outline'>Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className='mx-auto w-full max-w-sm'>
                <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>
                    Set your daily activity goal.
                  </DrawerDescription>
                </DrawerHeader>
                <div className='p-4 pb-0'>
                  <div className='flex items-center justify-center space-x-2'>
                    <Button
                      variant='outline'
                      size='icon'
                      className='h-8 w-8 shrink-0 rounded-full'
                    >
                      <Minus />
                      <span className='sr-only'>Decrease</span>
                    </Button>
                    <div className='flex-1 text-center'>
                      <div className='text-7xl font-bold tracking-tighter'></div>
                      <div className='text-[0.70rem] uppercase text-muted-foreground'>
                        Calories/day
                      </div>
                    </div>
                    <Button
                      variant='outline'
                      size='icon'
                      className='h-8 w-8 shrink-0 rounded-full'
                    >
                      <Plus />
                      <span className='sr-only'>Increase</span>
                    </Button>
                  </div>
                  <div className='mt-3 h-[120px]'></div>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant='outline'>Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
          {/* <div className='h-[50vh]'>
            <Button
              variant='outline'
              onClick={() => setOpen(true)}
            >
              Open
            </Button>
            <DrawerProvider
              open={open}
              setOpen={setOpen}
            >
              <div className='h-[50vh] w-fit'></div>
            </DrawerProvider>
          </div> */}
        </div>
      </SheetContent>
    </Sheet>
  )
}
