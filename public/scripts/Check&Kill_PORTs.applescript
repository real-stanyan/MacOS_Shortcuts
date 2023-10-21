on run
    set userInput to display dialog "Please enter a port number: " default answer ""
    set portNum to text returned of userInput as number
    set res to checkPort(portNum)
    return res
end run

-- function to check specific port usages
on checkPort(port_num)
    try
        set shellRes to do shell script "lsof -i :" & port_num & " 2>/dev/null || echo ''"
        -- if port haven't using
        if shellRes is "" then
            beep
            display dialog "Port" & space & port_num & space & "haven't been using"
            
        -- if port is using
        else
            beep
             set formattedText to "Port " & port_num & " is being used by the following processes:" & linefeed & linefeed & shellRes
            set userChoice to button returned of (display dialog formattedText buttons {"Kill Port", "Cancel"} default button "Cancel" with title "Warning" with icon caution)
             if userChoice is "Kill Port" then
                do shell script "lsof -ti :" & port_num & " | xargs kill -9" with administrator privileges
                display dialog "Port " & port_num & " processes killed." with title "Confirmation" buttons {"OK"} default button "OK" with icon note
            end if
        end if
    on error e
        return "????????" & e
    end try
end checkPort

