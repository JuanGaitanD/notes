function add_pickup_color() {
    /* Pickup Add */
    const pickup_add = Pickr.create({
        el: '#color_picker_add_note',
        theme: 'nano',
        default: '#82a682',
        swatches: null,
        components: {
            preview: true,
            lockOpacity: false,
            hue: true,
            interaction: {
                hex: true,
                rgba: false,
                hsla: false,
                hsva: false,
                cmyk: false,
                input: true,
                clear: false,
                save: true
            }
        }
    });

    pickup_add.on('save', (color, instance) => {
        document.getElementById('color_note_add').value = color.toHEXA().toString();
        instance.hide();
    });


    /* Pickup Update */
    const pickr_update = Pickr.create({
        el: '#color_picker_update_note',
        theme: 'nano',
        default: '#82a682',
        swatches: null,
        components: {
            preview: true,
            lockOpacity: false,
            hue: true,
            interaction: {
                hex: true,
                rgba: false,
                hsla: false,
                hsva: false,
                cmyk: false,
                input: true,
                clear: false,
                save: true
            }
        }
    });

    pickr_update.on('save', (color, instance) => {
        document.getElementById('color_note_add').value = color.toHEXA().toString();
        document.getElementById("img_update").style = "background-color: " + color.toHEXA().toString();
        document.getElementById("color_note_update").value = color.toHEXA().toString();
        instance.hide();
    });
}