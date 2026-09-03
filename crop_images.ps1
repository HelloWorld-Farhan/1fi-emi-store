Add-Type -AssemblyName System.Drawing
function CropRightHalf($url, $dest) {
    try {
        $temp = $dest + ".tmp"
        Invoke-WebRequest -Uri $url -OutFile $temp -UseBasicParsing -UserAgent "Mozilla/5.0"
        $img = [System.Drawing.Image]::FromFile($temp)
        $halfW = [int]($img.Width / 2)
        $rect = New-Object System.Drawing.Rectangle($halfW, 0, $halfW, $img.Height)
        $bmp = New-Object System.Drawing.Bitmap($halfW, $img.Height)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.Clear([System.Drawing.Color]::White)
        $g.DrawImage($img, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
        $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $g.Dispose()
        $bmp.Dispose()
        $img.Dispose()
        Remove-Item $temp
        Write-Host "Success: $dest"
    } catch {
        Write-Host "Failed: $dest ($url)"
    }
}

# Apple iPhone 15 Pro (Proxy for 16/17 Pro)
CropRightHalf "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg" "public\iphone-natural.jpg"
CropRightHalf "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-2.jpg" "public\iphone-blue.jpg"
CropRightHalf "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-3.jpg" "public\iphone-white.jpg"
CropRightHalf "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-4.jpg" "public\iphone-black.jpg"

# Samsung S24 Ultra (Proxy for S25 Ultra)
CropRightHalf "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg" "public\samsung-gray.jpg"
CropRightHalf "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-2.jpg" "public\samsung-black.jpg"
CropRightHalf "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-3.jpg" "public\samsung-violet.jpg"
CropRightHalf "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-4.jpg" "public\samsung-yellow.jpg"
