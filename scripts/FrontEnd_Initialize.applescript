set frameworkList to {"Next.js", "React.js","Vue.js","Vite"}

-- define the frameChoice
set frameChoice to choose from list frameworkList with prompt "Please select a framework to initialize:"
-- process the frameChoice
if frameChoice is false then
    return
else
    set chosenFramework to item 1 of frameChoice
end if

-- define the chosenFolder
set chosenFolder to choose folder with prompt "Please select a folder to create your Next.js app in:"
set folderPath to POSIX path of chosenFolder

-- define the App Name
set appName to text returned of (display dialog "Enter" & space & chosenFramework & space & "name:" default answer "")

-- process the logic
if chosenFramework is "Next.js" then
    terimalAction("npx create-next-app@latest",folderPath,appName)
else if chosenFramework is "React.js" then
    terimalAction("npx create-react-app",folderPath,appName)
else if chosenFramework is "Vue.js" then
    terimalAction("vue create",folderPath,appName)
else if chosenFramework is "Vite" then
    terimalAction("npx create-vite",folderPath,appName)
end if

-- Action Function
on terimalAction(command,folderPath,appName)
    tell application "iTerm"
        activate
        set newWindow to (create window with default profile)
        tell current session of newWindow
            write text "cd " & quoted form of folderPath & ";" & command & space & appName
        end tell
    end tell
end terimalAction
