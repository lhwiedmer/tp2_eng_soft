add_cus_dep('mmd', 'pdf', 0, 'mermaid2pdf');
add_cus_dep('mmd', 'png', 0, 'mermaid2png');

sub mermaid2pdf {
    my ($base) = @_;

    my $input  = "$base.mmd";
    my $output = "$base.pdf";

    print "Generating Mermaid diagram:\n";
    print "  $input -> $output\n";

    system("mmdc", "-p", "./puppeteer.json", "-i", $input, "-o", $output);

    return $? == 0 ? 0 : 1;
}

sub mermaid2png {
    my ($base) = @_;

    my $input  = "$base.mmd";
    my $output = "$base.png";

    print "Generating Mermaid diagram:\n";
    print "  $input -> $output\n";

    my $status = system(
        "mmdc",
        "-p", "./puppeteer.json",
        "-i", $input,
        "-o", $output,
        "--scale", "4"
    );

    return $status == 0 ? 0 : 1;
}
