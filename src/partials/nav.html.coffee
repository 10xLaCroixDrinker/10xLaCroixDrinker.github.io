navObj = @getYaml().load( @include '/nav.yml')

nav ->
  ul role:'navigation', ->
    # Render nav items
    for key of navObj
      item = navObj[key]
      li class:key.split(' ').join('-').toLowerCase(), ->
        a href:item.url, ->
          text key
        if item.children
          ul ->
            # Render nav children
            for cKey of item.children
              cItem = item.children[cKey]
              li ->
                a href:cItem.url, ->
                  text cKey
                if cItem.children
                  ul ->
                    # Render nav grandchildren
                    for gKey of cItem.children
                      gItem = cItem.children[gKey]
                      li ->
                        a href:gItem.url, ->
                          text gKey
    if @document.project
      li '.download', ->
        a href:'https://github.com/jking90/' + @document.project + '/archive/master.zip', 'Download'
      li '.view-on-github', ->
        a href:'https://github.com/jking90/' + @document.project, 'View on GitHub'
