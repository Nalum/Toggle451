/**
 * This script is released under the GNU GPL. See the file COPYING.
 * The script is provided as is, with no guarantee either express or implied
 * that it is fit for purpose. Use of the script, is entirely at the end users risk.
 *
 * @category Plugin
 * @package  Loader451
 * @author   Luke Mallon <luke.mallon@nexus451.com>
 * @license  GNU GPL - http://www.gnu.org/licenses/gpl.txt
 * @link     https://github.com/nalum/Toggle451
 * @version  1.0.0
 */

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
