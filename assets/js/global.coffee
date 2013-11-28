$ ->

  modal_engaged = false
  modal         = $(".modal")
  body          = $ 'body'
  menu_toggle   = $ '.header-menu-icon'

  menu_toggle.bind "click", (e) ->
    body.toggleClass "menu-open"
    menu_toggle.toggleClass "icon-menu icon-close"
    window.scrollTo 0, 0 if body.hasClass "menu-open"
    false

  $(document).keyup (e) ->
    if e.keyCode == 27
      body.removeClass "menu-open"
      menu_toggle.removeClass "icon-close"
      menu_toggle.addClass "icon-menu"
      close_modal()

  $(".js-photo-detail").bind "click", (e) ->
    return false if modal_engaged
    body.addClass "noscroll"
    modal_engaged = true
    modal.html null
    modal.addClass "modal-visible"
    data =
      src: $(@).attr "href"
    output = Mustache.render $("#photo-detail-contents").html(), data
    modal.html output
    setTimeout ->
      $(".modal-photo-card", modal).addClass "modal-photo-card-visible"
    , 50
    false

  $(".whos-who-toggle").bind "click", (e) ->
    self   = $ @
    target = $ self.attr('href')

    return false if self.hasClass 'whos-who-toggle-active'

    curr_t = $ '.whos-who-toggle-active'
    curr_c = $ '.whos-who-section-active'

    curr_t.removeClass 'whos-who-toggle-active'
    curr_c.removeClass 'whos-who-section-active'

    self.addClass 'whos-who-toggle-active'
    target.addClass 'whos-who-section-active'

    return false

  $(document).mouseup (e) ->
    target = $(e.target)
    close_modal() if !target.hasClass "modal-photo-card-img"

  close_modal = ->
    return unless modal_engaged
    modal.removeClass "modal-visible"
    modal_engaged = false
    body.removeClass "noscroll"
    false

  modal.on "click.fiesta-focus", ".icon-close", close_modal