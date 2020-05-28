WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "chanchal"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5ece647da22e5a4ee987925186969b93372697ff1ef5"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
Dialog("Login Failed").WinButton("OK").Click
WpfWindow("Micro Focus MyFlight Sample").Move 157,161
WpfWindow("Micro Focus MyFlight Sample").Close 
