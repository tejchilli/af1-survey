import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

const SurveyForm = () => {
  return (
    <>
      <style>
        {`
          body {
            background-image: url("https://i.imgur.com/scqbxrG.png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
          }
        `}
      </style>
      <div className="font-oswald container mx-auto max-w-2xl p-8">
        <header className="bg-black text-white text-center py-4">
          <h1 className="text-4xl font-bold">Air Force 1 Survey Form</h1>
          <p className="text-lg">Cast your vote for what the next AF1's should be.</p>
        </header>
        <form action="https://www.freecodecamp.com/email-submit" className="bg-white p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center">Basic Info</h2>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-lg">Name</Label>
            <Input id="name" type="text" placeholder="Enter your name" required className="font-oswald text-base" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required className="font-oswald text-base" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number" className="text-lg">Age (optional)</Label>
            <Input id="number" type="number" placeholder="Enter your age" min="10" max="99" className="font-oswald text-base" />
          </div>
          <h2 className="text-2xl font-bold text-center">AF1 Questions</h2>
          <div className="space-y-2">
            <p className="font-bold text-lg">Have you owned AF1's in the past?</p>
            <RadioGroup name="owned">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="text-base">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="text-base">No</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">What size are you?</p>
            <Select name="size">
              <SelectTrigger className="font-oswald text-base">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Smaller</SelectItem>
                <SelectItem value="7">7M/8.5W</SelectItem>
                <SelectItem value="8">8M/9.5W</SelectItem>
                <SelectItem value="9">9M/10.5W</SelectItem>
                <SelectItem value="10">10M/11.5W</SelectItem>
                <SelectItem value="11">11M/12.5W</SelectItem>
                <SelectItem value="12">12M/13.5W</SelectItem>
                <SelectItem value="big">Bigger</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Who would you like us to collaborate with? (Preferred Max: 2 People)</p>
            <div className="flex items-center space-x-2">
              <Checkbox id="virgil-abloh" name="prefer" value="virgil-abloh" />
              <Label htmlFor="virgil-abloh" className="text-base">Virgil Abloh</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="travis-scott" name="prefer" value="travis-scott" />
              <Label htmlFor="travis-scott" className="text-base">Travis Scott</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="jerry-lorenzo" name="prefer" value="jerry-lorenzo" />
              <Label htmlFor="jerry-lorenzo" className="text-base">Jerry Lorenzo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="james-jebbia" name="prefer" value="james-jebbia" />
              <Label htmlFor="james-jebbia" className="text-base">James Jebbia</Label>
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Any comments or suggestions?</p>
            <Textarea id="comments" name="comment" placeholder="Enter your comment here..." className="font-oswald text-base" />
          </div>
          <div>
            <Button type="submit" className="w-full text-lg font-bold border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors">Vote</Button>
          </div>
        </form>
        <footer className="text-center mt-8">
          <h3 className="font-bold">Nike</h3>
        </footer>
      </div>
    </>
  )
}

export default SurveyForm
