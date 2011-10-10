/**
 * Toggle451
 * 
 * jQuery plugin to toggle an item by it's ID
 * 
 * Min Required:
 *      jQuery Version 1.2
 * 
 * Example Usage:
 *      $('h3').toggle451();
 * 
 * Default Options:
 *      speed       : 'slow'
 *      idExtention : 'Toggle'
 *      toggleClass : 'toggle'
 * 
 * @version 1.0.0
 * @author  Luke Mallon <luke.mallon@nexus451.com>
 * @copy    Nexus451
 */

(function($) {
    $.fn.extend({
        'toggle451' : function(options) {
            var defaults = {
                'speed'         : 'slow',
                'idExtention'   : 'Toggle',
                'toggleClass'   : 'toggle'
            };
            
            var options = $.extend(defaults, options);
            
            return this.each(function() {
                var obj = $(this);
                var toggleLinks = $('.' + options.toggleClass, obj);
                
                toggleLinks.each(function() {
                    var link = $(this);
                    
                    link.click(function() {
                        var toggleId = '';
                        
                        if (/1\.4\.\d/.test(link.jquery)) {
                            toggleId = link.data('toggle');
                        } else {
                            toggleId = link.attr('data-toggle');
                        }
                        
                        var toggleItem = $('#' + toggleId + options.idExtention);
                        toggleItem.slideToggle(options.speed);
                        return false;
                    });
                });
            });
        }
    });
})(jQuery);